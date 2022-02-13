import Route from '@ember/routing/route';

export default class ItemRoute extends Route {
  model({ item_id }) {
    return item_id;
  }
}
