import * as React from 'react';
import * as MapboxGl from 'mapbox-gl';

export const MapContext = React.createContext(undefined) as React.Context<
  MapboxGl.Map | undefined
>;

// tslint:disable-next-line:no-any
export function withMap(Component: React.ComponentClass<any>) {
  // tslint:disable-next-line:no-any
  return React.forwardRef((props: any, ref: any) => {
    return (
      <MapContext.Consumer>
        {map => <Component map={map} ref={ref} {...props} />}
      </MapContext.Consumer>
    );
  });
}
