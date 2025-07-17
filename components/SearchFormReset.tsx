"use client"

import { X } from "lucide-react";

type Props = {
  onReset: () => void;
};

const SearchFormReset = ({ onReset }: Props) => {
  return (
    <button
      type="button"
      onClick={onReset}
      className="search-btn text-white"
    >
      <X className="size-5" />
    </button>
  );
};
export default SearchFormReset;
