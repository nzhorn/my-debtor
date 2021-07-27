import React, { useRef } from 'react';

const ENTER_KEY = 'Enter';

type SearchProps = {
  placeholder: string;
  onChange: (searchText?: string) => void;
  onEnter: (searchText?: string) => void;
  onSearchClick: (searchText?: string) => void;
  onBlur: (searchText?: string) => void;
};

const Search = ({
  placeholder = 'Search...',
  onChange = () => {},
  onEnter = () => {},
  onBlur = () => {},
  onSearchClick = () => {},
}: Partial<SearchProps>) => {
  const searchInput = useRef<HTMLInputElement>(null);

  const getSearchValue = (): string => {
    return searchInput?.current?.value ?? '';
  };

  const onKeyEnterBound = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const isEnterPressed = event.key === ENTER_KEY;
    if (isEnterPressed) {
      const searchText = getSearchValue();
      onEnter(searchText);
    }
  };

  const onChangeBound = () => {
    // @TODO add throttled or debounce
    const searchText = getSearchValue();
    onChange(searchText);
  };

  const onBlurBound = () => {
    const searchText = getSearchValue();
    onBlur(searchText);
  };

  return (
    <div className="">
      <input
        ref={searchInput}
        placeholder={placeholder}
        onChange={onChangeBound}
        onKeyPress={onKeyEnterBound}
        onBlur={onBlurBound}
      />
    </div>
  );
};
export default Search;
