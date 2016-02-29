import {
  UPDATE_RESOURCE_TREE_ACT
} from '../actions/Role';

let defaultState = {
  resourceTree: {
    id: 1,
    label: 'foo',
    checked: false,
    children: [
      {
        id: 2,
        label: 'foo1',
        checked: false,
      }, {
        id: 3,
        label: 'foo2',
        checked: false,
        children: [
          {
            id: 4,
            label: 'bar3',
            checked: true,
            children: [{
              id: 5,
              label: 'bar4',
              checked: true
            }]
          }
        ]
      }

    ]
  }
}

export default function Role(state = defaultState, action) {
  const actType = action.type;

  if(actType === UPDATE_RESOURCE_TREE_ACT) {
    const { resourceTree } = action;
    return Object.assign({}, state, { resourceTree });
  }

  return state;
}