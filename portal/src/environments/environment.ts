/**
 * Variables selected for the production environment
 */
export const environment = {
  /** environment */
  production: false,
  geoservers: [
    {
      id: 'brazil-data-cube',
      name: 'Brazil Data Cube',
      url: 'http://brazildatacube.dpi.inpe.br/geoserver'
    },
    {
      id: 'vector-data',
      name: 'Vector Data',
      url: 'http://localhost:9003/geoserver'
    },
  ],
  // urlStacCompose: 'http://localhost:5000/stac_compose'
  // urlStacCompose: 'http://datacube-001.dpi.inpe.br:5026/stac_compose'
  urlStacCompose: 'http://brazildatacube.dpi.inpe.br/stac-compose'
};

export class Environment {
  getGeoServerById(id: string): object {
    let selected_geoservers: object[] = environment.geoservers.filter((geoserver) => {
      return geoserver.id === id;
    });

    return selected_geoservers[0];
  }
}
