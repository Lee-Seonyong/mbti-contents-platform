import Footer from "./components/Footer";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
