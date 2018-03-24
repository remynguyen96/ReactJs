export const titlePage = `
    position: relative;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 2.4rem;
    text-align: center;
    &::after {
      content: "";
      position: absolute;
      background-color: #ffffff;
      width: 9rem;
      height: 0.2rem;
      margin-top: 0.5rem;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
`;

const borderRadius = ($radius) => `
  -webkit-border-radius: ${$radius};
  -moz-border-radius: ${$radius};
  -ms-border-radius: ${$radius};
  border-radius: ${$radius};
`;

const flexBox = `
  display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox;      /* TWEENER - IE 10 */
  display: -webkit-flex;     /* NEW - Chrome */
  display: flex;             /* NEW, Spec - Opera 12.1, Firefox 20+ */
`;

const flexAignItem = ($align = 'flex-start') => `
  -webkit-box-align: ${$align};
  -webkit-align-items: ${$align};
  -moz-box-align: ${$align};
  -ms-flex-align: ${$align};
  align-items: ${$align};
`;

const flexDirection = ($direction = 'row') => `
  flex-direction: ${$direction};
  -ms-flex-direction: ${$direction};
  -webkit-flex-direction: ${$direction};
`;

const flexBasic = ($unit = '100%') => `
  -webkit-flex-basis: ${$unit};
  -moz-flex-basis: ${$unit};
  flex-basis: ${$unit};
`;

export {
  borderRadius,
  flexBox,
  flexAignItem,
  flexDirection,
  flexBasic,
}
