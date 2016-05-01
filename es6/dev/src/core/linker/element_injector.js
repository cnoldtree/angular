import { Injector, THROW_IF_NOT_FOUND } from 'angular2/src/core/di/injector';
const _UNDEFINED = new Object();
export class ElementInjector extends Injector {
    constructor(_view, _nodeIndex) {
        super();
        this._view = _view;
        this._nodeIndex = _nodeIndex;
    }
    get(token, notFoundValue = THROW_IF_NOT_FOUND) {
        var result = _UNDEFINED;
        if (result === _UNDEFINED) {
            result = this._view.injectorGet(token, this._nodeIndex, _UNDEFINED);
        }
        if (result === _UNDEFINED) {
            result = this._view.parentInjector.get(token, notFoundValue);
        }
        return result;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudF9pbmplY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtN0dQMGxjQTgudG1wL2FuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci9lbGVtZW50X2luamVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEVBQUMsUUFBUSxFQUFFLGtCQUFrQixFQUFDLE1BQU0sK0JBQStCO0FBRzFFLE1BQU0sVUFBVSxHQUFzQixJQUFJLE1BQU0sRUFBRSxDQUFDO0FBRW5ELHFDQUFxQyxRQUFRO0lBQzNDLFlBQW9CLEtBQW1CLEVBQVUsVUFBa0I7UUFBSSxPQUFPLENBQUM7UUFBM0QsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUFVLGVBQVUsR0FBVixVQUFVLENBQVE7SUFBYSxDQUFDO0lBRWpGLEdBQUcsQ0FBQyxLQUFVLEVBQUUsYUFBYSxHQUFRLGtCQUFrQjtRQUNyRCxJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUM7UUFDeEIsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDMUIsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztZQUMxQixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQztRQUMvRCxDQUFDO1FBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNoQixDQUFDO0FBQ0gsQ0FBQztBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RvciwgVEhST1dfSUZfTk9UX0ZPVU5EfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9kaS9pbmplY3Rvcic7XG5pbXBvcnQge0FwcFZpZXd9IGZyb20gJy4vdmlldyc7XG5cbmNvbnN0IF9VTkRFRklORUQgPSAvKkB0czJkYXJ0X2NvbnN0Ki8gbmV3IE9iamVjdCgpO1xuXG5leHBvcnQgY2xhc3MgRWxlbWVudEluamVjdG9yIGV4dGVuZHMgSW5qZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF92aWV3OiBBcHBWaWV3PGFueT4sIHByaXZhdGUgX25vZGVJbmRleDogbnVtYmVyKSB7IHN1cGVyKCk7IH1cblxuICBnZXQodG9rZW46IGFueSwgbm90Rm91bmRWYWx1ZTogYW55ID0gVEhST1dfSUZfTk9UX0ZPVU5EKTogYW55IHtcbiAgICB2YXIgcmVzdWx0ID0gX1VOREVGSU5FRDtcbiAgICBpZiAocmVzdWx0ID09PSBfVU5ERUZJTkVEKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLl92aWV3LmluamVjdG9yR2V0KHRva2VuLCB0aGlzLl9ub2RlSW5kZXgsIF9VTkRFRklORUQpO1xuICAgIH1cbiAgICBpZiAocmVzdWx0ID09PSBfVU5ERUZJTkVEKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLl92aWV3LnBhcmVudEluamVjdG9yLmdldCh0b2tlbiwgbm90Rm91bmRWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiJdfQ==