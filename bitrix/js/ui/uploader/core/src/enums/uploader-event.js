/**
 * @namespace BX.UI.Uploader
 */
export const UploaderEvent = {
	UPLOAD_START: 'onUploadStart',
	UPLOAD_COMPLETE: 'onUploadComplete',
	ERROR: 'onError',
	MAX_FILE_COUNT_EXCEEDED: 'onMaxFileCountExceeded',
	DESTROY: 'onDestroy',
	BEFORE_BROWSE: 'onBeforeBrowse',
	BEFORE_DROP: 'onBeforeDrop',
	BEFORE_PASTE: 'onBeforePaste',
	BEFORE_FILES_ADD: 'onBeforeFilesAdd',
	FILE_BEFORE_ADD: 'File:onBeforeAdd',
	FILE_ADD_START: 'File:onAddStart',
	FILE_LOAD_START: 'File:onLoadStart',
	FILE_LOAD_PROGRESS: 'File:onLoadProgress',
	FILE_LOAD_COMPLETE: 'File:onLoadComplete',
	FILE_ERROR: 'File:onError',
	FILE_ADD: 'File:onAdd',
	FILE_REMOVE: 'File:onRemove',
	FILE_UPLOAD_START: 'File:onUploadStart',
	FILE_UPLOAD_PROGRESS: 'File:onUploadProgress',
	FILE_UPLOAD_COMPLETE: 'File:onUploadComplete',
	FILE_COMPLETE: 'File:onComplete',
	FILE_STATUS_CHANGE: 'File:onStatusChange',
	FILE_STATE_CHANGE: 'File:onStateChange',
};