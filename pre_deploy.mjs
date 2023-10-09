import fs from 'fs-extra';

async function checkDeploy() {
  const Deploy = './deploy';
  await fs.pathExists(Deploy);
  await fs.mkdirs(Deploy);
}
checkDeploy().then((r) => console.log('1. deploy 생성', r));

async function distCopy() {
  const Dest = './deploy/dist';
  const Source = 'dist';

  await fs.remove(Dest);
  await fs.copy(Source, Dest);
}
distCopy().then((r) => console.log('2. dist 복사', r));

//  3.env.prod 체크
//  4.paakge.json 업데이트