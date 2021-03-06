import './search-box.styles.css';

type SearchBoxProps = {
  hint: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchBox ({ hint, handleChange }: SearchBoxProps): JSX.Element {
  return (
    <input
      className="search"
      type="search"
      placeholder={hint}
      onChange={handleChange}
    />
  )
}
