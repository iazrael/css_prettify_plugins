using System;
using System.IO;
using System.Text;
using System.Drawing;
using System.Windows.Forms;
using System.Collections.Generic;
using System.Runtime.InteropServices;

namespace NppPluginNET
{
    public partial class PluginBase
    {
        #region " Fields "
        // string iniFilePath = null;
        // bool someSetting = false;
        // frmMyDlg frmMyDlg = null;
        // idMyDlg = -1;
        // Bitmap tbBmp = null;
        #endregion
        
        #region " StartUp/CleanUp "
        void CommandMenuInit()
        {
            // StringBuilder sbIniFilePath = new StringBuilder(Win32.MAX_PATH);
            // Win32.SendMessage(nppData._nppHandle, NppMsg.NPPM_GETPLUGINSCONFIGDIR, Win32.MAX_PATH, sbIniFilePath);
            // iniFilePath = sbIniFilePath.ToString();
            // if (!Directory.Exists(iniFilePath)) Directory.CreateDirectory(iniFilePath);
            // iniFilePath = Path.Combine(iniFilePath, _pluginBaseName + ".ini");
	        // someSetting = (Win32.GetPrivateProfileInt("SomeSection", "SomeKey", 0, iniFilePath) != 0);

            // SetCommand(0, "MyMenuCommand", myMenuFunction, new ShortcutKey(false, false, false, Keys.None));
            // SetCommand(1, "MyDockableDialog", myDockableDialog); idMyDlg = 1;
        }
        void SetToolBarIcon()
        {
            // toolbarIcons tbIcons = new toolbarIcons();
            // tbIcons.hToolbarBmp = tbBmp.GetHbitmap();
            // IntPtr pTbIcons = Marshal.AllocHGlobal(Marshal.SizeOf(tbIcons));
            // Marshal.StructureToPtr(tbIcons, pTbIcons, false);
            // Win32.SendMessage(nppData._nppHandle, NppMsg.NPPM_ADDTOOLBARICON, _funcItems.Items[idMyDlg]._cmdID, pTbIcons);
            // Marshal.FreeHGlobal(pTbIcons);
        }
        void PluginCleanUp()
        {
	        // Win32.WritePrivateProfileString("SomeSection", "SomeKey", someSetting ? "1" : "0", iniFilePath);
        }
        #endregion
        
        #region " Menu functions "
        // void myMenuFunction()
        // {
        // }
        // void myDockableDialog()
        // {
            // if (frmMyDlg == null)
            // {
                // frmMyDlg = new frmMyDlg(this);

                // NppTbData _nppTbData = new NppTbData();
                // _nppTbData.hClient = frmMyDlg.Handle;
                // _nppTbData.pszName = "My dockable dialog";
                // _nppTbData.dlgID = idMyDlg;
                // _nppTbData.uMask = NppTbMsg.DWS_DF_CONT_RIGHT;
                // _nppTbData.pszModuleName = _pluginModuleName;
                // IntPtr _ptrNppTbData = Marshal.AllocHGlobal(Marshal.SizeOf(_nppTbData));
                // Marshal.StructureToPtr(_nppTbData, _ptrNppTbData, false);

                // Win32.SendMessage(nppData._nppHandle, NppMsg.NPPM_DMMREGASDCKDLG, 0, _ptrNppTbData);
            // }
            // else
            // {
                // Win32.SendMessage(nppData._nppHandle, NppMsg.NPPM_DMMSHOW, 0, frmMyDlg.Handle);
            // }
        // }
        #endregion
    }
}