import * as action from './actions';

export default class {
    cal(calcObj) {
        switch (calcObj.action) {
            case '+': return action.add(calcObj.left, calcObj.right);
            case '-': return action.sub(calcObj.left, calcObj.right);
            case '*': return action.mul(calcObj.left, calcObj.right);
            default: throw Error('Not implemented action');
        }
    }
}