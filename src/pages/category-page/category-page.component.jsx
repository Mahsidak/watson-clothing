import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "../../compotents/collection-preview/collection-preview";

const CategoryPage = ({ match, collections }) => {
  const data = collections.find(
    (data) => data.title === match.params.categoryId
  );
  const { ...otherProps } = data;
  return (
    <div>
      <CollectionPreview key={data.id} {...otherProps} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  collections: state.collection.collections,
});
export default connect(mapStateToProps)(CategoryPage);
