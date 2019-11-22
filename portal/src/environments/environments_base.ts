export class EnvironmentBaseClass {
  /** environment */
  production: boolean = false;
  geoServers: object[] = [
    // example
    // {
    //   id: 'brazil-data-cube',
    //   name: 'Brazil Data Cube',
    //   url: 'http://brazildatacube.dpi.inpe.br/geoserver'
    // }
  ];
  urlStacCompose: string = '';

  getGeoServerById(id: string): object {
    let selected_geoServers: object[] = this.geoServers.filter((geoServer) => {
      return geoServer['id'] === id;
    });

    // 'selected_geoServers' has just one element, then return this only one
    return selected_geoServers[0];
  }
}
