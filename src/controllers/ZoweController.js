const zowe = require("@zowe/cli")
require("dotenv").config({ path: "./.env" })
const profile = {
  host: process.env.MF_HOST,
  port: process.env.MF_PORT,
  user: process.env.MF_USER,
  password: process.env.MF_PWD,
  rejectUnauthorized: false,
}

module.exports = {
  resume: async (req, res) => {
    const { user } = req.body
    const session = zowe.ZosmfSession.createBasicZosmfSession(profile)
    const { commandResponse } = zowe.IssueTso.issueTsoCommand(
      session,
      "ACCT#",
      `ALU ${user} RESUME`
    )
    return res.json({
      status: `ID ${user} RESUMED`,
      commandResponse,
    })
  },
  revoke: async (req, res) => {
    const { user } = req.body
    const session = zowe.ZosmfSession.createBasicZosmfSession(profile)
    console.log(session)
    const { commandResponse } = zowe.IssueTso.issueTsoCommand(
      session,
      "ACCT#",
      `ALU ${user} REVOKE`
    )
    return res.json({
      status: `ID ${user} REVOKED`,
      commandResponse,
    })
  },
}
