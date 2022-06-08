import { toast } from "@/common/toast";
export function checkResponseData(res) {
  if (res.errCode !== 0) {
    toast(res.errMsg);
    return null;
  } else {
    return res.data;
  }
}
// function logout() {
//   this.operationID = "";
//   this.userID = "";
//   this.cus_token = "";
// }
