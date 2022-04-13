import constantRoute from './routes/ConstantRoutes'
import variableRoute from './routes/VariableRoutes'
import type { RouteParam } from './route'
const allRoutes: RouteParam[] = constantRoute.concat(variableRoute)

export default allRoutes