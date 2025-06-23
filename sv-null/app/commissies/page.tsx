import { getCommissieItems } from '@/lib/content';
import List from '../components/List';

export default function CommissiesPage() {
  const items = getCommissieItems();

  return <List items={items} title="Commissies" basePath='commissies'/>;
}