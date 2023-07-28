import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:'skM8WouFhrXHTPO51J3Gb2xS1WE04ViV98YnecdLHtoC6QAuFQS1QIZPm5wt5Xzimz2NFshj6JbMJSsVuib643EmC1EDWOoI1wk0yM3bNkbhJSszjmzR6sJqThsHglbtz2NquPoOb9QiVeGDOYnlAciOYd97bVMEWOT1IdFNlekWdm5K0hjy'
})
