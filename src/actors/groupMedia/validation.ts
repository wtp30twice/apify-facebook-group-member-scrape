import Joi from 'joi';
import { allActorInputValidationFields } from 'crawlee-one';
import type { FbGroupMemberActorInput } from './config';

const inputValidationSchema = Joi.object<FbGroupMemberActorInput>({
  ...allActorInputValidationFields,
  maxMembers: Joi.number().integer().min(0).allow(null).optional(),
} satisfies Record<keyof FbGroupMemberActorInput, Joi.Schema>);

export const validateInput = (input: FbGroupMemberActorInput | null) => {
  Joi.assert(input, inputValidationSchema);
};
