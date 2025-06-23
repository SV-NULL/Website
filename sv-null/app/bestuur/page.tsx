import List from '../components/List';
import { getBestuurItems } from '@/lib/content';

export default function BestuurPage() {
  const items = getBestuurItems();

  return <List items={items} title="Besturen" />;
}