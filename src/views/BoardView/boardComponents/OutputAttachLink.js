import Component from '../../../modules/Component';

export default class OutputAttachLink extends Component {
  constructor(board) {
    super({
      tag: 'div',
    });

    console.log('output part: ', board);

    this.linkArea = new Component({
      tag: 'div',
      classes: ['board__attachURL'],
      content: `URL текущей доски: ${board}`,
    });

    this.addChild(this.linkArea);
  }
}
