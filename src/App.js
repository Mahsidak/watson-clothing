import React, { Component } from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { fetchCollectionsStartAsync } from "../src/redux/collection/collection.actions";

import HomePage from "./pages/homepage/homepage.components";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage.component";
import CategoryPage from "./pages/category-page/category-page.component";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./compotents/header/header.component";
import SignPage from "./pages/signpage/signpage";
import { auth, createUserProfileDoc } from "./firebase/firebase.utility";
import "./App.css";
import Loading from "./compotents/loading-animation/loading.component";

class App extends Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser, fetchCollectionsStartAsync } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDoc(user);
        userRef.onSnapshot((snap) => {
          setCurrentUser({
            id: snap.id,
            ...snap.data(),
          });
        });
      }
      setCurrentUser(user);
    });
    fetchCollectionsStartAsync();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path={`/shop/:categoryId`}
            render={(props) => {
              return this.props.collections ? (
                <CategoryPage {...props} />
              ) : (
                <Loading />
              );
            }}
          />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignPage />
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  collections: state.collection.collections,
});
const mapDispathToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});
export default connect(mapStateToProps, mapDispathToProps)(App);
