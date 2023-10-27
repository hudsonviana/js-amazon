import { getUserInfo } from '../localStorage';

const Header = {
  after_render: () => {},
  render: () => {
    const { name } = getUserInfo();

    return `
    <div class="brand">
      <a href="/#/">jsamazon</a>
    </div>
    <div>
      ${name ? `<a href="/#/profile">${name}</a>` : `<a href="/#/signin">Sign in</a>`}
      <a href="/#/cart">Cart</a>
    </div>`;
  },
};

export default Header;
