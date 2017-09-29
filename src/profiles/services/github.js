/* @flow */
import { Service } from './service'

class Github extends Service {
  static getBaseUrls() {
    const baseUrls = ['https://gist.github.com/']
    return baseUrls
  }

  static getProofUrl(proof: Object) {
    const baseUrls = this.getBaseUrls()
    for (let i = 0; i < baseUrls.length; i++) {
      if (proof.proof_url.toLowerCase().startsWith(`${baseUrls[i]}${proof.identifier}`)) {
        const raw = proof.proof_url.endsWith('/') ? 'raw' : '/raw'
        return `${proof.proof_url}${raw}`
      }
    }
    throw new Error(`Proof url ${proof.proof_url} is not valid for service ${proof.service}`)
  }
}

export { Github }
