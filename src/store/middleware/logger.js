export const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) {
      return next(action);
    }
  
    console.log('STORE> type: ', action.type);
    console.log('STORE> payload: ', action.payload);
    console.log('STORE> currentState: ', store.getState());
  
    next(action);
  
    console.log('next state: ', store.getState());
};