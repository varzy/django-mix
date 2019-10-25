import $ from 'jquery';

export class ChangeBgc {
  constructor(selector, bgc) {
    this.$selector = $(selector);
    this.bgc = bgc;

    this.$selector.click(this.triggerBgcChange.bind(this));
  }

  triggerBgcChange() {
    $('body').css('background-color', this.bgc);
  }
}
