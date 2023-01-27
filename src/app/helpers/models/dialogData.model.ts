export class DialogData {
  title: String;
  message: String;
  onConfirm: Function;
  onCancel: Function;
  constructor(
    title: String,
    message: String,
    onConfirm: Function,
    onCancel: Function
  ) {
    this.title = title;
    this.message = message;
    this.onConfirm = onConfirm;
    this.onCancel = onCancel;
  }
}
