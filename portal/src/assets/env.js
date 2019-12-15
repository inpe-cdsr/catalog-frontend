(function (window) {

    window.__env = window.__env || {};

    window.__env.urlGeoServer = 'http://cbers1.dpi.inpe.br:8089/geoserver';

    window.__env.urlViaCEP = 'http://viacep.com.br/ws';

    window.__env.urlStacCompose = 'http://cbers1.dpi.inpe.br:8089/stac-compose';

    window.__env.urlDGIBack = 'http://cbers1.dpi.inpe.br:8089/api';

    window.__env.providersToken = 'inpe_stac';

    window.__env.grids = 'States:grid_ibge_states:states; CBERS4:grid_cbers4_mux:grids; LandSat-8:grid_landsat_tm_amsul:grids; Sentinel-2:grid_sentinel_mgrs:grids';

}(this));
