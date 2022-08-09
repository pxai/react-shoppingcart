import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { selectCategoriesMap, selectIsLoading } from '../../store/categories/category.selector';
import Spinner from '../../components/spinner/spinner.styles';
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading)

  console.log("CATEGORIES_PREVIEW: ", categoriesMap, " isLoading: ", isLoading)
  return (
    <Fragment>
      { 
        isLoading 
        ? (<Spinner />)
        : (
          Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            return (
              <CategoryPreview key={title} title={title} products={products} />
            );
          })
        )
      }

    </Fragment>
  );
};

export default CategoriesPreview;