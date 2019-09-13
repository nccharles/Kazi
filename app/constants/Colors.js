const tintColor = 'rgba(72, 126, 176,1.0)';
const primary="rgba(72, 126, 176,1.0)";
const primary_trans="rgba(72, 126, 176,0.7)";
const secondary='rgba(7, 153, 146,1.0)';
const third="rgba(184, 233, 148,1.0)";
const secondary_trans='rgba(7, 153, 146,.7)';
const primary_white="#FFFFFF";
const primary_gray="#a4b0be";
const primary_black="#000000"
export default {
  primary,
  secondary,
  trans:primary_trans,
  third,
  primary_white,
  primary_gray,
  primary_black,
  primary_gradient: [third,secondary,primary],
  trans_gradient: [primary_trans,secondary_trans],
  Swiper_gradient:[primary,third],
  form_gradient:[primary_white,primary_gray],
  tintColor,
  tabIconDefault: primary_gray,
  tabIconSelected: primary,
  tabBar: primary_white,
  errorBackground: '#c23616',
  errorText: primary_white,
  warningBackground: '#EAEB5E',
  warningText: '#666804',
  noticeBackground: primary,
  noticeText: primary_white,
};
