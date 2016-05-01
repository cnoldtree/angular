import { LocationStrategy, PathLocationStrategy, Location } from 'angular2/platform/common';
import { Router, RootRouter } from 'angular2/src/router/router';
import { RouteRegistry, ROUTER_PRIMARY_COMPONENT } from 'angular2/src/router/route_registry';
import { ApplicationRef } from 'angular2/core';
import { BaseException } from 'angular2/src/facade/exceptions';
/**
 * The Platform agnostic ROUTER PROVIDERS
 */
export const ROUTER_PROVIDERS_COMMON = [
    RouteRegistry,
    /* @ts2dart_Provider */ { provide: LocationStrategy, useClass: PathLocationStrategy },
    Location,
    {
        provide: Router,
        useFactory: routerFactory,
        deps: [RouteRegistry, Location, ROUTER_PRIMARY_COMPONENT, ApplicationRef]
    },
    {
        provide: ROUTER_PRIMARY_COMPONENT,
        useFactory: routerPrimaryComponentFactory,
        deps: /*@ts2dart_const*/ ([ApplicationRef])
    }
];
function routerFactory(registry, location, primaryComponent, appRef) {
    var rootRouter = new RootRouter(registry, location, primaryComponent);
    appRef.registerDisposeListener(() => rootRouter.dispose());
    return rootRouter;
}
function routerPrimaryComponentFactory(app) {
    if (app.componentTypes.length == 0) {
        throw new BaseException("Bootstrap at least one component before injecting Router.");
    }
    return app.componentTypes[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyX3Byb3ZpZGVyc19jb21tb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLTdHUDBsY0E4LnRtcC9hbmd1bGFyMi9zcmMvcm91dGVyL3JvdXRlcl9wcm92aWRlcnNfY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFDLE1BQU0sMEJBQTBCO09BQ2xGLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLDRCQUE0QjtPQUN0RCxFQUFDLGFBQWEsRUFBRSx3QkFBd0IsRUFBQyxNQUFNLG9DQUFvQztPQUVuRixFQUFDLGNBQWMsRUFBd0IsTUFBTSxlQUFlO09BQzVELEVBQUMsYUFBYSxFQUFDLE1BQU0sZ0NBQWdDO0FBRTVEOztHQUVHO0FBQ0gsT0FBTyxNQUFNLHVCQUF1QixHQUE0QjtJQUM5RCxhQUFhO0lBQ2IsdUJBQXVCLENBQUMsRUFBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFDO0lBQ25GLFFBQVE7SUFDUjtRQUNFLE9BQU8sRUFBRSxNQUFNO1FBQ2YsVUFBVSxFQUFFLGFBQWE7UUFDekIsSUFBSSxFQUFFLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSx3QkFBd0IsRUFBRSxjQUFjLENBQUM7S0FDMUU7SUFDRDtRQUNFLE9BQU8sRUFBRSx3QkFBd0I7UUFDakMsVUFBVSxFQUFFLDZCQUE2QjtRQUN6QyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQzVDO0NBQ0YsQ0FBQztBQUVGLHVCQUF1QixRQUF1QixFQUFFLFFBQWtCLEVBQUUsZ0JBQXNCLEVBQ25FLE1BQXNCO0lBQzNDLElBQUksVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUN0RSxNQUFNLENBQUMsdUJBQXVCLENBQUMsTUFBTSxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUMzRCxNQUFNLENBQUMsVUFBVSxDQUFDO0FBQ3BCLENBQUM7QUFFRCx1Q0FBdUMsR0FBbUI7SUFDeEQsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxNQUFNLElBQUksYUFBYSxDQUFDLDJEQUEyRCxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUNELE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xvY2F0aW9uU3RyYXRlZ3ksIFBhdGhMb2NhdGlvblN0cmF0ZWd5LCBMb2NhdGlvbn0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vY29tbW9uJztcbmltcG9ydCB7Um91dGVyLCBSb290Um91dGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvcm91dGVyL3JvdXRlcic7XG5pbXBvcnQge1JvdXRlUmVnaXN0cnksIFJPVVRFUl9QUklNQVJZX0NPTVBPTkVOVH0gZnJvbSAnYW5ndWxhcjIvc3JjL3JvdXRlci9yb3V0ZV9yZWdpc3RyeSc7XG5pbXBvcnQge1R5cGV9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge0FwcGxpY2F0aW9uUmVmLCBPcGFxdWVUb2tlbiwgUHJvdmlkZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtCYXNlRXhjZXB0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuXG4vKipcbiAqIFRoZSBQbGF0Zm9ybSBhZ25vc3RpYyBST1VURVIgUFJPVklERVJTXG4gKi9cbmV4cG9ydCBjb25zdCBST1VURVJfUFJPVklERVJTX0NPTU1PTjogYW55W10gPSAvKkB0czJkYXJ0X2NvbnN0Ki9bXG4gIFJvdXRlUmVnaXN0cnksXG4gIC8qIEB0czJkYXJ0X1Byb3ZpZGVyICovIHtwcm92aWRlOiBMb2NhdGlvblN0cmF0ZWd5LCB1c2VDbGFzczogUGF0aExvY2F0aW9uU3RyYXRlZ3l9LFxuICBMb2NhdGlvbixcbiAge1xuICAgIHByb3ZpZGU6IFJvdXRlcixcbiAgICB1c2VGYWN0b3J5OiByb3V0ZXJGYWN0b3J5LFxuICAgIGRlcHM6IFtSb3V0ZVJlZ2lzdHJ5LCBMb2NhdGlvbiwgUk9VVEVSX1BSSU1BUllfQ09NUE9ORU5ULCBBcHBsaWNhdGlvblJlZl1cbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6IFJPVVRFUl9QUklNQVJZX0NPTVBPTkVOVCxcbiAgICB1c2VGYWN0b3J5OiByb3V0ZXJQcmltYXJ5Q29tcG9uZW50RmFjdG9yeSxcbiAgICBkZXBzOiAvKkB0czJkYXJ0X2NvbnN0Ki8gKFtBcHBsaWNhdGlvblJlZl0pXG4gIH1cbl07XG5cbmZ1bmN0aW9uIHJvdXRlckZhY3RvcnkocmVnaXN0cnk6IFJvdXRlUmVnaXN0cnksIGxvY2F0aW9uOiBMb2NhdGlvbiwgcHJpbWFyeUNvbXBvbmVudDogVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgYXBwUmVmOiBBcHBsaWNhdGlvblJlZik6IFJvb3RSb3V0ZXIge1xuICB2YXIgcm9vdFJvdXRlciA9IG5ldyBSb290Um91dGVyKHJlZ2lzdHJ5LCBsb2NhdGlvbiwgcHJpbWFyeUNvbXBvbmVudCk7XG4gIGFwcFJlZi5yZWdpc3RlckRpc3Bvc2VMaXN0ZW5lcigoKSA9PiByb290Um91dGVyLmRpc3Bvc2UoKSk7XG4gIHJldHVybiByb290Um91dGVyO1xufVxuXG5mdW5jdGlvbiByb3V0ZXJQcmltYXJ5Q29tcG9uZW50RmFjdG9yeShhcHA6IEFwcGxpY2F0aW9uUmVmKTogVHlwZSB7XG4gIGlmIChhcHAuY29tcG9uZW50VHlwZXMubGVuZ3RoID09IDApIHtcbiAgICB0aHJvdyBuZXcgQmFzZUV4Y2VwdGlvbihcIkJvb3RzdHJhcCBhdCBsZWFzdCBvbmUgY29tcG9uZW50IGJlZm9yZSBpbmplY3RpbmcgUm91dGVyLlwiKTtcbiAgfVxuICByZXR1cm4gYXBwLmNvbXBvbmVudFR5cGVzWzBdO1xufVxuIl19