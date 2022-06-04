import Button from 'components/atoms/Button';
import IconWithLinkContainer from 'components/molecules/containers/IconWithLinkContainer';
import { BoardInfo } from 'context/Board/types';
import * as React from 'react';
import { useState } from 'react';

import { StyledCategoryList } from './styles';

function CategoryList(props: { categories: BoardInfo[] }) {
  const categories = props.categories;
  const [isOpened, setIsOpened] = useState(false);

  return (
    <StyledCategoryList isOpened={isOpened}>
      <div className="title">
        <div>카테고리</div>
        <Button
          buttonType="contained"
          color="black"
          radius="round"
          onClick={() => {
            setIsOpened(!isOpened);
          }}>
          전체보기
        </Button>
      </div>
      <div className="category-list">
        {categories.map((category, index) => {
          return (
            <IconWithLinkContainer
              key={index}
              name={category.name}
              icon={category.path}
              link={`board/${category.path}`}
            />
          );
        })}
      </div>
    </StyledCategoryList>
  );
}

export default CategoryList;