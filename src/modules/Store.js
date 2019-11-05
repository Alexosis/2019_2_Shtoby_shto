import StoreWrapper from './StoreWrapper';

export default class Store {
  constructor(initialState) {
    this.state = initialState;

    this.listeners = [];
  }

  applyMiddleware(middleware) {
    return new StoreWrapper(this, middleware);
  }

  dispatch(action) {
    const newState = this.reducer(this.state, action);
    if (newState != this.state) {
      this.mutated(newState);
      this.state = newState;
    }
  }

  mutated(mutatedState) {
    this.listeners.forEach((l) => {
      l(mutatedState);
    });
  }

  subscribe(fun, selector) {
    if (selector) {
      const filter = this.makeFilter(selector);

      this.listeners.push((mutation) => {
        const filtered = filter(mutation);

        if (filtered.mutated) {
          fun(filtered.mutation);
        }
      });
    } else {
      this.listeners.push(fun);
    }
  }

  makeFilter(selector) {
    return (mutation) => {
      const filteredMut = {
        mutated: false,
      };

      let selectedOldProps = undefined;
      let selectedNewProps = undefined;

      let gotOld = false;
      let gotNew = false;

      try {
        selectedOldProps = selector(this.state);

        if (selectedOldProps) {
          gotOld = true;
        }
      } catch (e) {}

      try {
        selectedNewProps = selector(mutation);

        if (selectedNewProps) {
          gotNew = true;
        }
      } catch (e) {}

      switch (gotOld) {
        case false:
          switch (gotNew) {
            case false:
              break;
            case true:
              filteredMut.mutation = selectedNewProps;
              filteredMut.mutated = true;
              break;
          }
          break;
        case true:
          switch (gotNew) {
            case false:
              filteredMut.mutation = selectedNewProps;
              filteredMut.mutated = true;
              break;
            case true:

              const didMutate = this.checkForMutation(
                  selectedOldProps, selectedNewProps
              );

              if (didMutate) {
                filteredMut.mutated = true;
                filteredMut.mutation = selectedNewProps;
              }
              break;
          }
          break;
      }
      return filteredMut;
    };
  }

  checkForMutation(oldState, newState) {
    if (oldState instanceof Object) {
      let mutated = false;

      if (oldState instanceof Array) {
        if (oldState.length != newState.length) {
          mutated = true;
        } else {
          oldState.forEach((val, index) => {
            if (oldState[index] != newState[index]) {
              mutated = true;
            }
          });
        }
      } else {
        Object.entries(oldState).forEach(([key, value]) => {
          if (oldState[key] !== newState[key]) {
            mutated = true;
          }
        });
      }

      return mutated;
    } else {
      return oldState !== newState;
    }
  }

  getState() {
    return this.state;
  }

  reducer(state, action) {}
}