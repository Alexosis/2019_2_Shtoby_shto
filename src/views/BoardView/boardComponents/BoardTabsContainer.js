import Component from '../../../modules/Component';

import BoardTab from './BoardTab';

export default class BoardTabsContainer extends Component {
  constructor(dispatch, ...boards) {
    super({classes: ['board__tabs']});

    boards.forEach((b, i) => {
      this.addChild(new BoardTab({
        // name: b.name,
        // id: b.id,
        // index: i,
        dispatch: dispatch,
      }, i, b).makeDraggable(
          (comp) => {
            this.enableHighliting(comp.props.index);
          },
          (comp) => {
            this.disableHighliting(comp.props.index);
          },
          (comp) => {
            this.disableHighliting(comp.props.index);
          }));
    });
  }

  selectTab(index) {
    this.forEachChild((ch) => {
      if (ch.trueone) {
        ch.trueone.deselect();
      } else {
        ch.deselect();
      }
    });

    if (typeof index !== 'undefined') {
      const selectedChild = this.getChild(index);
      if ('select' in selectedChild) {
        selectedChild.select();
      } else {
        selectedChild.trueone.select();
      }
    }
  }

  enableHighliting(index) {
    this.forEachChildSmart((child) => {
      if (!(child.index === index)) {
        child.component.enableStuff();
      }
    });
  }

  disableHighliting(index) {
    // this.forEachChildSmart((child) => {
    // if (!(child.index === index)) {
    // child.component.disableStuff();
    // }
    // });
  }
}
