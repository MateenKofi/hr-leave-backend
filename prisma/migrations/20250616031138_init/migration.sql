-- AlterTable
ALTER TABLE "Leave" ADD COLUMN     "leavePolicyId" TEXT;

-- AddForeignKey
ALTER TABLE "Leave" ADD CONSTRAINT "Leave_leavePolicyId_fkey" FOREIGN KEY ("leavePolicyId") REFERENCES "LeavePolicy"("id") ON DELETE SET NULL ON UPDATE CASCADE;
