// GERAL.JS: ARMAZENA ESTILOS DE COMPONENTES PADRÃO

import metrics from './metrics';
import colors from './colors';
import fonts from './fonts';

const geral = {
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  section: {
    margin: metrics.doubleBaseMargin,
  },
  sectionTitle: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: fonts.regular,
    alignSelf: 'center',
    marginBottom: metrics.doubleBaseMargin
  }
}

export default geral;
