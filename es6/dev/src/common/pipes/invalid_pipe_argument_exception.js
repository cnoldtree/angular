import { stringify } from 'angular2/src/facade/lang';
import { BaseException } from 'angular2/src/facade/exceptions';
export class InvalidPipeArgumentException extends BaseException {
    constructor(type, value) {
        super(`Invalid argument '${value}' for pipe '${stringify(type)}'`);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52YWxpZF9waXBlX2FyZ3VtZW50X2V4Y2VwdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtN0dQMGxjQTgudG1wL2FuZ3VsYXIyL3NyYy9jb21tb24vcGlwZXMvaW52YWxpZF9waXBlX2FyZ3VtZW50X2V4Y2VwdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxFQUFPLFNBQVMsRUFBQyxNQUFNLDBCQUEwQjtPQUNqRCxFQUFDLGFBQWEsRUFBbUIsTUFBTSxnQ0FBZ0M7QUFFOUUsa0RBQWtELGFBQWE7SUFDN0QsWUFBWSxJQUFVLEVBQUUsS0FBYTtRQUNuQyxNQUFNLHFCQUFxQixLQUFLLGVBQWUsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyRSxDQUFDO0FBQ0gsQ0FBQztBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUeXBlLCBzdHJpbmdpZnl9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge0Jhc2VFeGNlcHRpb24sIFdyYXBwZWRFeGNlcHRpb259IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvZXhjZXB0aW9ucyc7XG5cbmV4cG9ydCBjbGFzcyBJbnZhbGlkUGlwZUFyZ3VtZW50RXhjZXB0aW9uIGV4dGVuZHMgQmFzZUV4Y2VwdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHR5cGU6IFR5cGUsIHZhbHVlOiBPYmplY3QpIHtcbiAgICBzdXBlcihgSW52YWxpZCBhcmd1bWVudCAnJHt2YWx1ZX0nIGZvciBwaXBlICcke3N0cmluZ2lmeSh0eXBlKX0nYCk7XG4gIH1cbn1cbiJdfQ==