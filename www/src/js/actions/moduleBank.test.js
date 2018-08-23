// @flow
import * as actions from 'actions/moduleBank';
import NUSModsApi from 'apis/nusmods';

// Mock NUSModsApi as its URLs contain the current AY, breaking the snapshot tests
// every AY.
jest.mock('apis/nusmods');
NUSModsApi.moduleListUrl.mockReturnValue('test://MOCK_MOD_LIST_URL');
NUSModsApi.moduleDetailsUrl.mockImplementation(
  (...args) => `test://MOCK_MOD_DETAILS_URL/${[...args].join('/')}`,
);

test('fetchModuleList should return a request action', () => {
  const resultOfAction = actions.fetchModuleList();
  expect(resultOfAction).toMatchSnapshot();
});

test('fetchModule should return a request action', () => {
  const resultOfAction = actions.fetchModule('CS1010S');
  expect(resultOfAction).toMatchSnapshot();
});
