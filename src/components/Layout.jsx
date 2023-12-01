import { connect } from "react-redux";
import Navigator from "./Navigator";
import Footer from "./Footer";
import Alert from "./Alert";

function Layout({ children }) {
  return (
    <div>
      <Navigator />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">{children}</div>
      </div>
      <Footer />
      <Alert />
    </div>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Layout);
