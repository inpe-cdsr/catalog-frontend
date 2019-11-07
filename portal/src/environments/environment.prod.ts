/**
 * Variables selected for the production environment
 */
export const environment = {
  /** environment */
  production: true,
  geoservers: [],
  urlStacCompose: ''
};

export class Environment {
  getGeoServerById(id: string): object {
    let selected_geoservers: object[] = environment.geoservers.filter((geoserver) => {
      return geoserver.id === id;
    });

    return selected_geoservers[0];
  }
}
