/**
 *  Introduces component library styles on demand.
 * https://github.com/anncwb/vite-plugin-style-import
 */
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

export function configStyleImportPlugin(isBuild: boolean) {
	return Components({
		resolvers: [VantResolver()]
	})
}
