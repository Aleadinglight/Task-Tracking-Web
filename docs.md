# Documents

  

## Task

```javascript
task: {
	name: <string>,
	description:  <string>,
	priority:  <string>,
	status:  <string>,
	due:  <int>
}
```
**Name**
- Name of the task
- Defined as `name`
- Type `<string>`
- Example: `"Learn C++"` 

**Description**
- Description of the task
- Defined as `description`
- Type `<string>`
- Example: `"Finish chpt.8: Memory Management"`

**Priority**
- The priority of the task
	-- `0`: High
	-- `1`: Medium
	-- `2`: Low
- Defined as `priority`
- Type `<string>`
- Example: `"1"`

**Status**
- The status of the task
	-- `0`: On-going
	-- `1`: Open
	-- `2`: Complete
- Defined as `status`
- Type `<string>`
- Example: `"1"`

**Due**
- The deadline of the task, as a timestamp in Epoch/Unix time
- Defined as `due`
- Type `<int>`
- Example: `1640739215`
