import test from 'ava'
import axios from 'axios'

const port = process.env.PORT || 8888
const token = '1e7c20905fe86990c5227e7e9f00002fe908d4d4dd4d7c0091032dacd2d0e07d'

test(`should return an object with first DenominacaoTSTP equal to STA. MÔNICA`, async (t) => {
  const authResponse = await axios({
    method: 'post',
    url: `http://localhost:${port}/auth/`,
    params: { token }
  })
  const findResponse = await axios({
    method: 'get',
    url: `http://localhost:${port}/find/`,
    params: {
      auth: authResponse.data.auth,
      tipo: 'linhas',
      termosBusca: 'Sta. Mônica',
      route: '/linha/buscar'
    }
  })
  t.is(findResponse.data[0].DenominacaoTSTP, 'STA. MÔNICA')
})
