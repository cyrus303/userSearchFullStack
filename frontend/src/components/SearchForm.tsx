import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';

export function SearchForm() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="ID" />
      <Button type="submit">Search</Button>
    </div>
  );
}

export default SearchForm;
