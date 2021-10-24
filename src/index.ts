import { mainFactory } from './@mainjs/main.factory';
import { RFRController } from './modules/rfr/rfr.controller';

mainFactory.create().addController(RFRController).run(3000);
