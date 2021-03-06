"use strict";
/**
 * @packageDocumentation
 * @module API-PlatformVM-Constants
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformVMConstants = void 0;
class PlatformVMConstants {
}
exports.PlatformVMConstants = PlatformVMConstants;
PlatformVMConstants.LATESTCODEC = 0;
PlatformVMConstants.SECPFXID = 0;
PlatformVMConstants.SECPXFEROUTPUTID = 7;
PlatformVMConstants.SUBNETAUTHID = 10;
PlatformVMConstants.SECPOWNEROUTPUTID = 11;
PlatformVMConstants.STAKEABLELOCKOUTID = 22;
PlatformVMConstants.SECPINPUTID = 5;
PlatformVMConstants.STAKEABLELOCKINID = 21;
PlatformVMConstants.LOCKEDSTAKEABLES = [PlatformVMConstants.STAKEABLELOCKINID, PlatformVMConstants.STAKEABLELOCKOUTID];
PlatformVMConstants.BASETX = 0;
PlatformVMConstants.ADDVALIDATORTX = 12;
PlatformVMConstants.ADDSUBNETVALIDATORTX = 13;
PlatformVMConstants.ADDDELEGATORTX = 14;
PlatformVMConstants.CREATECHAINTX = 15;
PlatformVMConstants.CREATESUBNETTX = 16;
PlatformVMConstants.IMPORTTX = 17;
PlatformVMConstants.EXPORTTX = 18;
PlatformVMConstants.ADVANCETIMETX = 19;
PlatformVMConstants.REWARDVALIDATORTX = 20;
PlatformVMConstants.SECPCREDENTIAL = 9;
PlatformVMConstants.ASSETIDLEN = 32;
PlatformVMConstants.BLOCKCHAINIDLEN = 32;
PlatformVMConstants.SYMBOLMAXLEN = 4;
PlatformVMConstants.ASSETNAMELEN = 128;
PlatformVMConstants.ADDRESSLENGTH = 20;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwaXMvcGxhdGZvcm12bS9jb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7R0FHRzs7O0FBRUgsTUFBYSxtQkFBbUI7O0FBQWhDLGtEQWtEQztBQWpEUSwrQkFBVyxHQUFVLENBQUMsQ0FBQztBQUV2Qiw0QkFBUSxHQUFVLENBQUMsQ0FBQztBQUVwQixvQ0FBZ0IsR0FBVSxDQUFDLENBQUM7QUFFNUIsZ0NBQVksR0FBVSxFQUFFLENBQUM7QUFFekIscUNBQWlCLEdBQVUsRUFBRSxDQUFDO0FBRTlCLHNDQUFrQixHQUFVLEVBQUUsQ0FBQztBQUUvQiwrQkFBVyxHQUFVLENBQUMsQ0FBQztBQUV2QixxQ0FBaUIsR0FBVSxFQUFFLENBQUM7QUFFOUIsb0NBQWdCLEdBQWlCLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLEVBQUUsbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUVqSCwwQkFBTSxHQUFVLENBQUMsQ0FBQztBQUVsQixrQ0FBYyxHQUFVLEVBQUUsQ0FBQztBQUUzQix3Q0FBb0IsR0FBVSxFQUFFLENBQUM7QUFFakMsa0NBQWMsR0FBVSxFQUFFLENBQUM7QUFFM0IsaUNBQWEsR0FBVSxFQUFFLENBQUM7QUFFMUIsa0NBQWMsR0FBVSxFQUFFLENBQUM7QUFFM0IsNEJBQVEsR0FBVSxFQUFFLENBQUM7QUFFckIsNEJBQVEsR0FBVSxFQUFFLENBQUM7QUFFckIsaUNBQWEsR0FBVSxFQUFFLENBQUM7QUFFMUIscUNBQWlCLEdBQVUsRUFBRSxDQUFDO0FBRTlCLGtDQUFjLEdBQVUsQ0FBQyxDQUFDO0FBRTFCLDhCQUFVLEdBQVUsRUFBRSxDQUFDO0FBRXZCLG1DQUFlLEdBQVUsRUFBRSxDQUFDO0FBRTVCLGdDQUFZLEdBQVUsQ0FBQyxDQUFDO0FBRXhCLGdDQUFZLEdBQVUsR0FBRyxDQUFDO0FBRTFCLGlDQUFhLEdBQVUsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAcGFja2FnZURvY3VtZW50YXRpb25cbiAqIEBtb2R1bGUgQVBJLVBsYXRmb3JtVk0tQ29uc3RhbnRzXG4gKi9cblxuZXhwb3J0IGNsYXNzIFBsYXRmb3JtVk1Db25zdGFudHMge1xuICBzdGF0aWMgTEFURVNUQ09ERUM6bnVtYmVyID0gMDtcblxuICBzdGF0aWMgU0VDUEZYSUQ6bnVtYmVyID0gMDtcblxuICBzdGF0aWMgU0VDUFhGRVJPVVRQVVRJRDpudW1iZXIgPSA3O1xuICBcbiAgc3RhdGljIFNVQk5FVEFVVEhJRDpudW1iZXIgPSAxMDtcblxuICBzdGF0aWMgU0VDUE9XTkVST1VUUFVUSUQ6bnVtYmVyID0gMTE7XG5cbiAgc3RhdGljIFNUQUtFQUJMRUxPQ0tPVVRJRDpudW1iZXIgPSAyMjtcblxuICBzdGF0aWMgU0VDUElOUFVUSUQ6bnVtYmVyID0gNTtcblxuICBzdGF0aWMgU1RBS0VBQkxFTE9DS0lOSUQ6bnVtYmVyID0gMjE7XG5cbiAgc3RhdGljIExPQ0tFRFNUQUtFQUJMRVM6QXJyYXk8bnVtYmVyPiA9IFtQbGF0Zm9ybVZNQ29uc3RhbnRzLlNUQUtFQUJMRUxPQ0tJTklELCBQbGF0Zm9ybVZNQ29uc3RhbnRzLlNUQUtFQUJMRUxPQ0tPVVRJRF07XG5cbiAgc3RhdGljIEJBU0VUWDpudW1iZXIgPSAwO1xuXG4gIHN0YXRpYyBBRERWQUxJREFUT1JUWDpudW1iZXIgPSAxMjtcblxuICBzdGF0aWMgQUREU1VCTkVUVkFMSURBVE9SVFg6bnVtYmVyID0gMTM7XG5cbiAgc3RhdGljIEFERERFTEVHQVRPUlRYOm51bWJlciA9IDE0O1xuXG4gIHN0YXRpYyBDUkVBVEVDSEFJTlRYOm51bWJlciA9IDE1O1xuXG4gIHN0YXRpYyBDUkVBVEVTVUJORVRUWDpudW1iZXIgPSAxNjtcblxuICBzdGF0aWMgSU1QT1JUVFg6bnVtYmVyID0gMTc7XG5cbiAgc3RhdGljIEVYUE9SVFRYOm51bWJlciA9IDE4O1xuXG4gIHN0YXRpYyBBRFZBTkNFVElNRVRYOm51bWJlciA9IDE5O1xuXG4gIHN0YXRpYyBSRVdBUkRWQUxJREFUT1JUWDpudW1iZXIgPSAyMDtcblxuICBzdGF0aWMgU0VDUENSRURFTlRJQUw6bnVtYmVyID0gOTtcblxuICBzdGF0aWMgQVNTRVRJRExFTjpudW1iZXIgPSAzMjtcblxuICBzdGF0aWMgQkxPQ0tDSEFJTklETEVOOm51bWJlciA9IDMyO1xuXG4gIHN0YXRpYyBTWU1CT0xNQVhMRU46bnVtYmVyID0gNDtcblxuICBzdGF0aWMgQVNTRVROQU1FTEVOOm51bWJlciA9IDEyODtcblxuICBzdGF0aWMgQUREUkVTU0xFTkdUSDpudW1iZXIgPSAyMDtcbn1cbiJdfQ==