import { EnvironmentBaseClass } from 'src/environments/environments_base';

/**
 * Selected Variables for development environment
 */
export class Environment extends EnvironmentBaseClass {
  /** development environment */
  production = false;
  geoServers = [
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
  ];
  // urlStacCompose = 'http://localhost:5000/stac_compose'
  // urlStacCompose = 'http://datacube-001.dpi.inpe.br:5026/stac_compose'
  urlStacCompose = 'http://brazildatacube.dpi.inpe.br/stac-compose';
}
