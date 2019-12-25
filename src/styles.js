const fontColor = '#353839';
const mainText = {
  color: fontColor,
  fontSize: 16,
};
const buttonText = {
  color: fontColor,
  fontSize: 20,
}
const container = {
  backgroundColor: '#f0f0f0',
  flex: 1,
  padding: 10,
};
const box = {
  backgroundColor: '#fff',
  padding: 10,
  borderRadius: 4,
  borderWidth: 1,
  borderColor: '#ccc',
};
const absoluteCover = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
};
const submitButton = {
  backgroundColor: '#bfbfbf',
  borderRadius: 4,
  paddingHorizontal: 10,
  paddingVertical: 8,
  alignItems: 'center',
};
const submitButtonTitle = {
  ...buttonText,
};
const h1Font = {
  fontSize: 20,
  color: '#000',
};
const textInput = {
  paddingHorizontal: 10,
  paddingTop: 8,
  paddingBottom: 10,
  borderWidth: 1,
  borderRadius: 4,
  borderColor: '#bfbfbf',
};

export default {
  container,
  box,
  submitButton,
  submitButtonTitle,
  absoluteCover,
  h1Font,
  textInput,
};