import * as service from './posts-service';

describe('Posts service', () => {
  const mockResponse = [{
    title: 'title',
    body: 'body',
  }];

  describe('Success', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockImplementation(() => {
          return new Promise((resolve, reject) => {
            resolve({
              ok: true,
              json:  () => mockResponse,
            });
          });
      });
    });

    it('should fetch posts', async function() {
      const actual = await service.getPosts();
      expect(actual.response).toEqual(mockResponse);
    });
  });

  describe('Error', () => {
    const error = {
      message: 'fails'
    };

    beforeEach(() => {
      global.fetch = jest.fn().mockImplementation(() => {
          return new Promise((resolve, reject) => {
            reject(
              error,
            );
          });
      });
    });

    it('should handle error', async function() {
      const actual = await service.getPosts();
      expect(actual.error).toEqual(error);
    });
  });
});
