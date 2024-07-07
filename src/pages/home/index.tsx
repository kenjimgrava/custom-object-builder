import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import {
  addToObjectArray,
  saveCustomObject,
} from "../../store/slice/formSlice";
import { useDispatch } from "react-redux";
import { CustomObject, Field } from "../../@customTypes/FormObjectData";

function HomePage() {
  const dispatch = useDispatch();
  const [fields, setFields] = useState<Field[]>([
    { fieldName: "", fieldValue: "" },
  ]);
  const [customObject, setCustomObject] = useState<CustomObject>({});
  const [objectArray, setObjectArray] = useState<CustomObject[]>([]);

  const handleFieldChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newFields = fields.slice();
    newFields[index].fieldName = e.target.value;
    setFields(newFields);
  };

  const handleValueChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newFields = fields.slice();
    newFields[index].fieldValue = e.target.value;
    setFields(newFields);
  };

  const handleAddField = () => {
    const newCustomObject = { ...customObject };
    fields.forEach((field) => {
      if (field.fieldName && field.fieldValue) {
        newCustomObject[field.fieldName] = field.fieldValue;
      }
    });

    setCustomObject(newCustomObject);
    setFields([...fields, { fieldName: "", fieldValue: "" }]);
    console.log({ fields });
  };

  const handleCreateObject = () => {
    if (Object.keys(customObject).length > 0) {
      setObjectArray([...objectArray, customObject]);
      dispatch(saveCustomObject(customObject));
      setCustomObject({});
      setFields([{ fieldName: "", fieldValue: "" }]);
    }
  };

  const handleSave = () => {
    dispatch(addToObjectArray(objectArray));
    setObjectArray([]);
  };

  //todos
  //transfer the button, input as a component - done
  //save and display custom object
  //add array of object feature
  //implement redux
  //separate the form as a component
  //implement view page

  return (
    <div className="max-w-md mx-auto mt-5">
      <div className="p-4 bg-white rounded-lg shadow-md">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddField();
          }}
        >
          {fields.map((field, index) => (
            <div key={index}>
              <div className="mb-4">
                <Input
                  placeholder="Enter field name"
                  value={field.fieldName}
                  onChange={(e) => handleFieldChange(index, e)}
                  className="w-full focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <Input
                  placeholder="Enter field value"
                  value={field.fieldValue}
                  onChange={(e) => handleValueChange(index, e)}
                  className="w-full focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          ))}
          <div className="mb-4">
            <Button
              className="w-full px-4 py-2 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              text="Add Field"
            />
          </div>
        </form>
        <div>
          <h3 className="mb-2 text-lg font-semibold"> Object:</h3>
          <pre className="p-2 bg-gray-100 rounded-md">
            {JSON.stringify(customObject, null, 2)}
          </pre>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-semibold">Array Object:</h3>
          <pre className="p-2 bg-gray-100 rounded-md">
            {JSON.stringify(objectArray, null, 2)}
          </pre>
        </div>
        <div className="mt-4">
          <Button
            onClick={handleCreateObject}
            text="Create Another Object"
            className="w-full hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
          />
        </div>
      </div>
      <div className="mt-4 mx-auto w-1/2">
        <Button
          onClick={handleSave}
          text="Save"
          className="w-full hover:bg-blue-400 focus:outline-none focus:bg-blue-400 bg-green-400"
        />
      </div>
    </div>
  );
}

export default HomePage;
