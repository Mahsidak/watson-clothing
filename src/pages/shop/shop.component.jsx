import { React, Component } from "react";
import CollectionPreview from "../../compotents/collection-preview/collection-preview";
import { connect } from "react-redux";

import Loading from "../../compotents/loading-animation/loading.component";

class ShopPage extends Component {
  render() {
    const { collections } = this.props;
    return (
      <div className="shop">
        {collections ? (
          collections.map(({ id, ...otherProps }) => (
            <CollectionPreview key={id} {...otherProps} />
          ))
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  collections: state.collection.collections,
});

export default connect(mapStateToProps)(ShopPage);
